/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH under
 * one or more contributor license agreements. See the NOTICE file distributed
 * with this work for additional information regarding copyright ownership.
 * Licensed under the Camunda License 1.0. You may not use this file
 * except in compliance with the Camunda License 1.0.
 */

import {useTranslation} from 'react-i18next';
import {Heading, PageLayout, Separator, Text} from '@camunda/design-system';
import {cn} from '#/shared/cn';
import {FilterSidebar} from '#/operate/shared/FilterSidebar/shadcn.components/FilterSidebar';
import {InstancesList} from '#/operate/shared/InstancesList/shadcn.components/InstancesList';

const panelClassName = cn('h-full overflow-auto bg-neutral-background p-4');

const Processes: React.FC = () => {
	const {t} = useTranslation();

	return (
		<PageLayout id="main-content" tabIndex={-1} padding="none" width="full" className="h-full">
			<Heading as="h1" className="sr-only">
				{t('operate.processes.title')}
			</Heading>
			<InstancesList
				type="process"
				leftPanel={
					<FilterSidebar localStorageKey="isProcessesFiltersCollapsed" isResetButtonDisabled>
						<Text as="p" className="text-sm text-neutral-foreground-subtle">
							{t('operate.processes.scaffold.filtersPanelPlaceholder')}
						</Text>
					</FilterSidebar>
				}
				topPanel={
					<div className={panelClassName}>
						<Heading as="h2" variant="heading-sm">
							{t('operate.processes.diagramHeader.title')}
						</Heading>
						<Separator className="my-3" />
						<Text as="p" className="text-sm text-neutral-foreground-subtle">
							{t('operate.processes.scaffold.diagramPanelPlaceholder')}
						</Text>
					</div>
				}
				bottomPanel={
					<div className={panelClassName}>
						<Heading as="h2" variant="heading-sm">
							{t('operate.processes.instancesTable.title')}
						</Heading>
						<Separator className="my-3" />
						<Text as="p" className="text-sm text-neutral-foreground-subtle">
							{t('operate.processes.scaffold.instancesTablePlaceholder')}
						</Text>
					</div>
				}
			/>
		</PageLayout>
	);
};

export {Processes};
