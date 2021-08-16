import { TENANT_INFO,UPDATE_TENANT_TOKEN } from './types';

export const updateTenant = (updateTenantData) => ({
    type:TENANT_INFO,
    data:updateTenantData
});

export const updateTenantToken = (updateTenantToken) => ({
    type:UPDATE_TENANT_TOKEN,
    data:updateTenantToken
});
