const createDeliverySlice = (set) => ({
  vehicleCapacity: 0,
  warehouseLatLong: "",
  mapData: [],
  setVehicleCapacity: (capacity) => set({ vehicleCapacity: capacity }),
  setWarehouseLatLong: (latLong) => set({ warehouseLatLong: latLong }),
  setMapData: (data) => set({ mapData: data }),
});

export default createDeliverySlice;


