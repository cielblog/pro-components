import React from 'react';
import { Skeleton, Card, Space } from 'antd';
import { PageHeaderSkeleton } from '../List';

interface ResultPageSkeletonProps {
  active?: boolean;
  pageHeader?: false;
}

const ResultPageSkeleton: React.FC<ResultPageSkeletonProps> = ({ active = true, pageHeader }) => (
  <div
    style={{
      width: '100%',
    }}
  >
    {pageHeader !== false && <PageHeaderSkeleton active={active} />}
    <Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 128,
        }}
      >
        <Skeleton.Avatar
          size={64}
          style={{
            marginBottom: 32,
          }}
        />
        <Skeleton.Button active={active} style={{ width: 214, marginBottom: 8 }} />
        <Skeleton.Button active={active} style={{ width: 328 }} size="small" />
        <Space
          style={{
            marginTop: 24,
          }}
        >
          <Skeleton.Button active={active} style={{ width: 116 }} />
          <Skeleton.Button active={active} style={{ width: 116 }} />
        </Space>
      </div>
    </Card>
  </div>
);

export default ResultPageSkeleton;
