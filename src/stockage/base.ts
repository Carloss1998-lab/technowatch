import { SQLite } from "@ionic-native/sqlite";
import { Preference } from "./Preference";
import { isPlatform } from "@ionic/react";
import defaultPreference from "./Preference.json";

var inMemoryPreference = defaultPreference;

const initDBIfNeeded = async () => {
    const db = await SQLite.create({
        name: "data2.db",
        location: "default",
    });
    await db.executeSql(
        "CREATE TABLE IF NOT EXISTS preferences(identifiant INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT,repositorie TEXT, description TEXT)",
        []
    );
    return db;
};

export const getPreferences = async () => {
    if (!isPlatform("android") && !isPlatform("ios")) {
        // Pas sur mobile, comportement dégradé
        return inMemoryPreference;
    }

    const data = await (await initDBIfNeeded()).executeSql(
        "SELECT * FROM preferences ",
        []
    );
    const retour: Preference[] = [];
    for (let index = 0; index < data.rows.length; index++) {
        const element = data.rows.item(index);
        retour.push(element);
    }
    return retour;
};

export const addPreferences = async (preference: Preference) => {
    if (!isPlatform("android") && !isPlatform("ios")) {
        // Pas sur mobile, comportement dégradé
        inMemoryPreference = [...inMemoryPreference, preference];
        return inMemoryPreference;
    }

    await (
        await initDBIfNeeded()
    ).executeSql("INSERT INTO preferences(login,repositorie,description) VALUES(?,?,?)", [
        preference.Login,
        preference.repositorie,
        preference.description,
    ]);

    return getPreferences();
};