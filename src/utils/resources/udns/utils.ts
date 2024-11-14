import { modelToGroupVersionKind, modelToRef } from '@kubevirt-ui/kubevirt-api/console';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const ClusterUserDefinedNetworkModel: K8sModel = {
  abbr: 'CUDN',
  apiGroup: 'k8s.ovn.org',
  apiVersion: 'v1',
  crd: true,
  id: 'clusteruserdefinednetwork',
  kind: 'ClusterUserDefinedNetwork',
  label: 'Cluster User Defined Network',
  labelPlural: 'Cluster User Defined Networks',
  legacyPluralURL: true,
  namespaced: false,
  plural: 'clusteruserdefinednetworks',
};

export const ClusterUserDefinedNetworkModelGroupVersionKind = modelToGroupVersionKind(
  ClusterUserDefinedNetworkModel,
);
export const ClusterUserDefinedNetworkModelRef = modelToRef(ClusterUserDefinedNetworkModel);

export const UserDefinedNetworkModel: K8sModel = {
  abbr: 'UDN',
  apiGroup: 'k8s.ovn.org',
  apiVersion: 'v1',
  crd: true,
  id: 'userdefinednetwork',
  kind: 'UserDefinedNetwork',
  label: 'User Defined Network',
  labelPlural: 'User Defined Networks',
  legacyPluralURL: true,
  namespaced: true,
  plural: 'userdefinednetworks',
};

export const UserDefinedNetworkModelGroupVersionKind =
  modelToGroupVersionKind(UserDefinedNetworkModel);
export const UserDefinedNetworkModelRef = modelToRef(UserDefinedNetworkModel);

export default UserDefinedNetworkModel;
