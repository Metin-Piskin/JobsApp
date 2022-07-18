import { useState, useEffect } from "react";
import { Alert } from "react-native";
export default function (state, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            const { name } = action.payload;
            const fliter = state.FavouritesList.find(item => item.id === name.id);
            if (fliter) {
                Alert.alert("Hata", "Bu iş zaten favorilerinizde mevcuttur!");
                return state;
            }
            else {
                Alert.alert("Başarılı!", "Favorilerinize başarıyla alınmıştır!");
                const newList = [...state.FavouritesList, name];
                return { ...state, FavouritesList: newList };
            }
        case 'REMOVE_FAVORITE':
            Alert.alert('Başarılı!', 'Bu iş favorilerinizden kaldırıldı!');
            return {
                FavouritesList: [...state.FavouritesList.filter(favori => favori !== action.payload.name)]
            }

        default:
            return state;
    }
}