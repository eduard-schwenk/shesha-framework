import { Empty, Spin, Timeline } from 'antd';
import React, { FC, useEffect, useMemo } from 'react';
import { useGet } from 'hooks';
import { useDebouncedCallback } from 'use-debounce';
import { EntitiesGetAllQueryParams, useEntitiesGetAll } from 'apis/entities';
import { useGlobalState } from 'providers';
import { ITimelineProps } from './models';
import { TimelineItem } from './timelineItem';
import moment from 'moment';

export const ShaTimeline: FC<ITimelineProps> = ({ properties, ownerId, entityType, customApiUrl, apiSource }) => {
  const useGetAll = apiSource === 'custom' ? useGet : useEntitiesGetAll;

  //timeline icons
  const { globalState } = useGlobalState();
  const getAllProps =
    apiSource === 'custom' ? { path: customApiUrl + `?id=${ownerId}` || '', lazy: true } : { lazy: true };
  const { refetch: fetchAllEntities, loading: isFetchingEntities, data } = useGetAll(getAllProps as any);

  const fetchEntities = (params: object) => {
    if (apiSource === 'custom') {
      fetchAllEntities();
    } else {
      fetchAllEntities(params);
    }
  };

  const queryParams = useMemo(() => {
    const result: EntitiesGetAllQueryParams = {
      entityType,
    };

    result.properties =
      typeof properties === 'string' ? `id ${properties}` : ['id', ...Array.from(new Set(properties || []))].join(' ');

    return result;
  }, [properties, globalState]);

  const debouncedRefresh = useDebouncedCallback(() => {
    fetchEntities({ queryParams });
  }, 300);

  const timelineData: any[] = apiSource === 'custom' ? data?.result : data?.result?.items;
  //sort values
  const sortedTimelineData = timelineData?.sort((item1, item2) => {
    const actionDataA = item1?.actionData;
    const actionDataB = item2?.actionData;

    if (actionDataA < actionDataB) {
      return -1;
    }
    if (actionDataA > actionDataB) {
      return 1;
    }
    return 0;
  });

  const temp = [
    {
      title: null,
      body: 'nnnnn',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-20T11:30:47.817',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'testing',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-19T16:38:43.253',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'Dear Sir/ Madam,\r\n Kindly note that the case you have reported of Ref: {ReferenceNo} is cancelled',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-19T11:57:59.907',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'Sho Hlayi',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:49:35.297',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: '',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:48:25.177',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'gjghj',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:48:25.093',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hvjhjb',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:46:16.73',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hfgjhgj',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:44:45.133',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'jkjlk;',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:42:24.58',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'jkjlk;',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:42:24.527',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'tetsys',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:37:00.86',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'testing again',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:32:46.16',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hghiuh',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:27:40.087',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hghiuh',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:26:57.53',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hghiuh',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:26:57.4',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hghiuh',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:26:38.787',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'hghiuh',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:26:38.743',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'testing sms',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:24:09.567',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body: 'testing sms',
      fromPerson: {
        _displayName: 'System Administrator',
        _className: 'Shesha.Core.Person',
        id: '1a7d1b0f-3982-4af5-9fe1-819fd217f0cf',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T11:24:09.563',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
    {
      title: null,
      body:
        'Dear Sir/Madam,\r\n Kindly note that the case you have reported was successfully submitted your Reference No : {ReferenceNo}',
      fromPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      toPerson: {
        _displayName: 'Nkosinathi Ndaba',
        _className: 'Shesha.Core.Person',
        id: 'fecb1e32-ede3-4c35-bf91-46e75da7ede2',
      },
      actionDate: '2023-06-15T10:56:05.76',
      type: 1,
      channel: 1,
      id: '00000000-0000-0000-0000-000000000000',
    },
  ];

  useEffect(() => {
    debouncedRefresh();
  }, [queryParams]);

  return (
    <Spin spinning={isFetchingEntities}>
      {(!temp?.length && <Empty description="Empty timeline" />) || (
        <Timeline>
          {temp?.map(({ title, body, fromPerson, actionDate, channel }) => {
            return (
              <TimelineItem
                title={title}
                toPerson={fromPerson?._displayName}
                channel={channel}
                actionDate={moment(actionDate).format('DD/MM/YYYY HH:mm')}
                body={body}
              />
            );
          })}
        </Timeline>
      )}
    </Spin>
  );
};
