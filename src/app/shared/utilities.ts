export class Utilities {
    attributes: any;
    path: string;
    nextPath: any;
    dataItem: string;
    neglectColumn: string[] = [];

    keys(obj) {
        return Object.keys(obj||{});
    }

    join(obj) {
        return Object.values(obj|| {}).filter(value => typeof(value)!= 'object').join(', ');
    }

    type(obj) {
        return typeof(obj)
    }

    removeColumns(data) {
        return data[this.dataItem].map(obj => {
            let filteredObj = JSON.parse(JSON.stringify(obj));
            for(let column of this.neglectColumn){
                delete filteredObj[column]
            }
            return filteredObj;
        })
    }


}