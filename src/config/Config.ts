import { Tunes } from "../models/tunes.enum";


export const Config = {
    pageSize: 10,
    defaultTune: Tunes.NUMBER,
    defaultKeysCount: 17,
    defaultSortField: 'updated',
    localStorageKeyToken: 'com.kontranik.kalimba.token'
}

