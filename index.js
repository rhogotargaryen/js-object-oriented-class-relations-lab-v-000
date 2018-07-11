let store = { drivers: [], trips: [], passengers: [] };
let driverId = 0;

class Driver {
    
    constructor(name, trip) {
        this.id = ++driverId;
        this.name =  name;
        if (trip) {
          this.tripId = trip.id;
        }
        store.drivers.push(this)
    }
    settrip(trip) {
        this.tripId = trip.id;
    }
    
    trips() {
        return store.trips.filter(trip => {
            return this.id === trip.driverId;
        })
    }
    
    passengers() {
      return this.trips().map(trip => {
        return trip.passenger()
      })
    }
}


let passengerId = 0;

class Passenger {
  constructor(name, trip) {
    this.id = ++passengerId;
    this.name = name;
    if(trip) {        
      this.tripId = trip.id;
    }
    store.passengers.push(this);
  }
  
  trips() {
      return store.trips.filter(trip => {
          return trip.passengerId === this.id
      })
  }
  
  drivers() {
      return this.trips().map(trip => {
          return trip.driver()
      })
  }
}

let tripId = 0

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId = driver.id;;
        this.passengerId = passenger.id;
        
        store.trips.push(this);
    }
    
    driver() {
        let a = store.drivers.filter(driver => {
            return driver.id === this.driverId;
        })
        return a[0];
    }
    
    passenger() {
        let a = store.passengers.filter (passenger => {
            return passenger.id === this.passengerId;
        })
        return a[0]
    }
}