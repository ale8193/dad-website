

export const getAllServices = () => {
    return [
        {
            id: 0,
            code: 'elettrauto',
            name: 'Elettrauto',
            description: '',
            subServices: [
                {
                    id: 0,
                    item: 'Ricarica aria condizionata'
                },
                {
                    id: 1,
                    item: 'Ricarica aria condizionata'
                },
            ]
        },
        {
            id: 1,
            code: 'metano',
            name: 'Impianti Metano',
            description: '',
            subServices: [
                {
                    id: 0,
                    item: 'Montaggio impianti metano'
                },
                {
                    id: 1,
                    item: 'Manutenzione impianto metano'
                },
                {
                    id: 2,
                    item: 'Revisione bombole'
                },
            ]
        },
        {
            id: 2,
            code: 'gpl',
            name: 'Impianti GPL',
            description: '',
            subServices: [
                {
                    id: 0,
                    item: 'Montaggio impianti GPL'
                },
                {
                    id: 1,
                    item: 'Manutenzione impianto GPL'
                },
                {
                    id: 2,
                    item: 'Revisione bombole'
                },
            ]
        },
        {
            id: 3,
            code: 'prova1',
            name: 'Prova 1',
            description: '',
            subServices: [
                {
                    id: 0,
                    item: 'Prova servizio'
                },
                {
                    id: 1,
                    item: 'Prova servizio'
                },
                {
                    id: 2,
                    item: 'Prova servizio'
                },
                {
                    id: 2,
                    item: 'Prova servizio'
                },
                {
                    id: 2,
                    item: 'Prova servizio'
                },
                {
                    id: 2,
                    item: 'Prova servizio'
                },
            ]
        },
        {
            id: 4,
            code: 'prova2',
            name: 'Prova 2',
            description: '',
            subServices: [
                {
                    id: 0,
                    item: 'Prova servizio'
                },
                {
                    id: 1,
                    item: 'Prova servizio'
                },
                {
                    id: 2,
                    item: 'Prova servizio'
                },
            ]
        }
    ]
}