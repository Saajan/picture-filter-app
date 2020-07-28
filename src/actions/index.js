export const SETTINGS_CHANGE = 'SETTINGS_CHANGE';

export const changeSettings = (data) => ({
    type: SETTINGS_CHANGE,
    filter: data.filter,
    value: data.value
});
