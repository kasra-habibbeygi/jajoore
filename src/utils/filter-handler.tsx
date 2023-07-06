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
        filterItem?.map((item: any) => {
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

export const filterGetter = (query: any) => {
    let queryString = '';

    if (query.person) {
        queryString += `&NumberOfPeople=${query.person}`;
    }
    if (query.minPrice) {
        queryString += `&MinPricc=${query.minPrice}`;
    }
    if (query.maxPrice) {
        queryString += `&MaxPrice=${query.maxPrice}`;
    }
    if (query.beds) {
        queryString += `&BedCount=${query.beds}`;
    }
    if (query.rooms) {
        queryString += `&NumberOfRoom=${query.rooms}`;
    }
    if (query.area) {
        queryString += `&ResidenceAreaIds=${query.area.split('-')}`;
    }
    if (query.lease) {
        queryString += `&RentTypeIds=${query.lease.split('-')}`;
    }
    if (query.types) {
        queryString += `&VisionIds=${query.types.split('-')}`;
    }
    if (query.facilities) {
        queryString += `&ResidenceFacilitieIds=${query.facilities.split('-')}`;
    }
    if (query.rules) {
        queryString += `&ForbiddenWorkIds=${query.rules.split('-')}`;
    }
    if (query.vipStatus) {
        queryString += `&Vip=${query.vipStatus}`;
    }

    if (query.property) {
        if (query.property.includes('instant')) {
            queryString += '&Instant=true';
        }
        if (query.property.includes('plus')) {
            queryString += '&Plus=true';
        }
        if (query.property.includes('sale')) {
            queryString += '&FromBiggestDiscount=true';
        }
    }

    if (query.order) {
        if (query.order === 'top') {
            queryString += '&FromBest=true';
        }
        if (query.order === 'score') {
            queryString += '&score=true';
        }
        if (query.order === 'low-price') {
            queryString += '&FromLowestPrice=true';
        }
        if (query.order === 'max-price') {
            queryString += '&FromHighestPrice=true';
        }
        if (query.order === 'max-reservation') {
            queryString += '&FromMostReserved=true';
        }
        if (query.order === 'sale') {
            queryString += '&FromBiggestDiscount=true';
        }
        if (query.order === 'newest') {
            queryString += '&FromLatest=true';
        }
    }

    return queryString;
};
