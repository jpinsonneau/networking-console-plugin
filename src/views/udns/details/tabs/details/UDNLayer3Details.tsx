import React, { FC } from 'react';

import { DetailsItem } from '@utils/components/DetailsItem/DetailsItem';
import { useNetworkingTranslation } from '@utils/hooks/useNetworkingTranslation';
import { ClusterUserDefinedNetworkKind, UserDefinedNetworkKind } from '@utils/resources/udns/types';

type UDNLayer3DetailsProps = {
  emptyText: React.JSX.Element;
  joinSubnets: React.JSX.Element;
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind;
  subnets: React.JSX.Element;
};

const UDNLayer3Details: FC<UDNLayer3DetailsProps> = ({ emptyText, joinSubnets, obj, subnets }) => {
  const { t } = useNetworkingTranslation();
  const layer3Path = obj.spec?.network ? 'spec.network.layer3' : 'spec.layer3';

  return (
    <>
      <DetailsItem defaultValue={emptyText} label={t('MTU')} obj={obj} path={`${layer3Path}.mtu`} />
      <DetailsItem
        defaultValue={emptyText}
        label={t('Role')}
        obj={obj}
        path={`${layer3Path}.role`}
      />
      <DetailsItem
        defaultValue={emptyText}
        label={t('Subnets')}
        obj={obj}
        path={`${layer3Path}.subnets`}
      >
        {subnets}
      </DetailsItem>
      <DetailsItem
        defaultValue={emptyText}
        label={t('JoinSubnets')}
        obj={obj}
        path={`${layer3Path}.joinSubnets`}
      >
        {joinSubnets}
      </DetailsItem>
    </>
  );
};

export default UDNLayer3Details;
