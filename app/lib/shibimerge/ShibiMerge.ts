import Shibi from "../../model/shibi/Shibi";
import Trip from "../../model/shibi/Trip";

export default class ShibiMerge {

    public static mergeShibi(shibiArray: Shibi[]) {
        const firstShibi = shibiArray[0];

        let unsortedTrips: Trip[] = [];

        shibiArray.forEach(function (shibi) {
            if (shibi.trips != undefined) {
                shibi.trips.forEach(function (trip) {
                    unsortedTrips.push(trip);
                });
            }
        });

        unsortedTrips.sort(function(a, b) {
            // https://stackoverflow.com/questions/44582097/how-to-sort-array-by-date
            // convert date object into number to resolve issue in typescript
            return + new Date(a.departure.time) - + new Date(b.departure.time);
        });

        firstShibi.trips = unsortedTrips;

        return firstShibi;
    }
}
