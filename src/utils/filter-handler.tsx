export const FilterHandler = (filterActionStatus: any, name: string, router: any, filterItemState: any) => {
    if (filterActionStatus.type === name) {
        if (filterActionStatus.action === 'remove') {
            delete router.query[name];
            router.push(router);
        } else {
            let newQuery: number[] = [];

            Object.keys(filterItemState).forEach((item: any) => {
                if (filterItemState[item].value === true) {
                    newQuery.push(filterItemState[item].id);
                }
            });

            if (newQuery.length) {
                router.query[name] = newQuery.join('-');
                router.push(router);
            }
        }
    }
};

export const FilterValueProvider = (setFilterItemState: any, filterItem: any, query: string) => {
    setFilterItemState(() => {
        let newData = {};
        filterItem.map((item: any) => {
            newData = {
                ...newData,
                [item.name]: {
                    id: item.id,
                    value: query?.split('-')?.includes(item.id.toString()) ?? false
                }
            };
        });
        return newData;
    });
};
