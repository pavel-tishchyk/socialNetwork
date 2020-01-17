import appReducer, { changeLocale } from "./app-reducer";

let state = {
    initialized: true,//false
    locale: "en",
};

it('language should be changed to `ru`', () => {
    let action = changeLocale('ru');
    let newState = appReducer(state, action);
    expect(newState.locale).toBe('ru');
});

