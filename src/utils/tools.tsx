/* eslint-disable import/no-anonymous-default-export */
class Tools {
    changeTimeStampToDate(timeStamp: number) {
        return new Date(timeStamp).toLocaleDateString('fa-IR');
    }

    changeTimeStampToHumanReadAble(timeStamp: number) {
        const dateTemp = new Date(timeStamp).toLocaleString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return dateTemp;
    }
}

export default new Tools();
