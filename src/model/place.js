
export const getPlace = () => {
    return {
        place: {
            zoom: 13,
            center: { lat: 43.270835, lng: 13.274583 }
        }
    }
};

export const getPlaceInfo = () => {
    return {
        placeInfo: {
            title: 'Officina Staffolani',
            address: 'Contrada Vallonica 24/A, 62010 TREIA, (MC) Italia',
            telephone: '3355617718',
            email: 'adriano@officinastaffolani.it'
        }
    }
}

export const getOpeningTimes = () => {
    return {
        openingTimes: [
            {
                short: 'Lun',
                long: 'Lunedì',
                times: [
                    '8:00 - 12:30',
                    '15:30 - 20:00'
                ]
            },
            {
                short: 'Mar',
                long: 'Martedì',
                times: [
                    '8:00 - 12:30',
                    '15:30 - 20:00'
                ]
            },
            {
                short: 'Mer',
                long: 'Mercoledì',
                times: [
                    '8:00 - 12:30',
                    '15:30 - 20:00'
                ]
            },
            {
                short: 'Gio',
                long: 'Giovedì',
                times: [
                    '8:00 - 12:30',
                    '15:30 - 20:00'
                ]
            },
            {
                short: 'Ven',
                long: 'Venerdì',
                times: [
                    '8:00 - 12:30',
                    '15:30 - 20:00'
                ]
            },
            {
                short: 'Sab',
                long: 'Sabato',
                times: [
                    '8:00 - 12:30',
                    '15:30 - 20:00'
                ]
            },
            {
                short: 'Dom',
                long: 'Domenica',
                times: []
            }
        ]
    }
}
