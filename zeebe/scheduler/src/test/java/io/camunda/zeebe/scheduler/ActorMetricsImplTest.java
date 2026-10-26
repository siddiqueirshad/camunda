/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH under
 * one or more contributor license agreements. See the NOTICE file distributed
 * with this work for additional information regarding copyright ownership.
 * Licensed under the Camunda License 1.0. You may not use this file
 * except in compliance with the Camunda License 1.0.
 */
package io.camunda.zeebe.scheduler;

import static org.assertj.core.api.Assertions.assertThat;

import io.camunda.zeebe.scheduler.ActorMetrics.SubscriptionType;
import io.camunda.zeebe.scheduler.ActorMetricsDoc.ActorMetricsKeyName;
import io.micrometer.core.instrument.simple.SimpleMeterRegistry;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.Test;

final class ActorMetricsImplTest {

  @Test
  void shouldRecordNegativeSchedulingLatencyAsZero() {
    // given
    final var registry = new SimpleMeterRegistry();
    final var metrics = new ActorMetricsImpl(registry);

    // when
    metrics.observeJobSchedulingLatency(-42L, SubscriptionType.FUTURE);

    // then
    final var timer =
        registry
            .find(ActorMetricsDoc.SCHEDULING_LATENCY.getName())
            .tag(
                ActorMetricsKeyName.SUBSCRIPTION_TYPE.asString(), SubscriptionType.FUTURE.getName())
            .timer();
    assertThat(timer).isNotNull();
    assertThat(timer.count()).isEqualTo(1);
    assertThat(timer.totalTime(TimeUnit.NANOSECONDS)).isZero();
  }
}
