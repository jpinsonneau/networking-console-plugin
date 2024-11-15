import {
  ClusterUserDefinedNetworkKind,
  UserDefinedNetworkKind,
  UserDefinedNetworkLayer3Subnet,
  UserDefinedNetworkSpec,
} from '../types';
import UserDefinedNetworkModel, { ClusterUserDefinedNetworkModel } from '../utils';

export const getNetwork = (
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind,
): UserDefinedNetworkSpec => {
  return obj.spec?.network || obj.spec;
};

export const getLayer2Subnets = (
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind,
): string[] => {
  return getNetwork(obj)?.layer2?.subnets || [];
};

export const getLayer2JoinSubnets = (
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind,
): string[] => {
  return getNetwork(obj)?.layer2?.joinSubnets || [];
};

export const getLayer3Subnets = (
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind,
): UserDefinedNetworkLayer3Subnet[] => {
  return getNetwork(obj)?.layer3?.subnets || [];
};

export const getLayer3JoinSubnets = (
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind,
): string[] => {
  return getNetwork(obj)?.layer3?.joinSubnets || [];
};

export const getTopology = (
  obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind,
): string => {
  return getNetwork(obj)?.topology || null;
};

export const getDescription = (udn: UserDefinedNetworkKind): string => {
  return udn?.metadata?.annotations?.description;
};

export const getModel = (obj: ClusterUserDefinedNetworkKind | UserDefinedNetworkKind) => {
  if (obj.kind === 'ClusterUserDefinedNetwork') {
    return ClusterUserDefinedNetworkModel;
  } else {
    return UserDefinedNetworkModel;
  }
};