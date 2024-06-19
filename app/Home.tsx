import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import CarRepository, { Car } from "../src/database/CarRepository";

const repository = new CarRepository();

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [model, setModel] = useState<string>('');
  const [minHp, setMinHp] = useState<string>('');
  const [maxHp, setMaxHp] = useState<string>('');

  const create = async () => {
    const id = await repository.create({
      brand: "VW",
      model: "Fusca",
      hp: Math.floor(Math.random() * 100),
    });
    console.log("Created: ", id);
    await all();
  };

  const all = async () => {
    const cars = await repository.all();
    setCars(cars);
    console.log(cars);
  };

  const deleteCar = async (id: number) => {
    await repository.deleteCar(id);
    await all();
  };

  const searchByModel = async () => {
    const cars = await repository.findByModel(model);
    setCars(cars);
  };

  const searchByHpRange = async () => {
    const cars = await repository.findByHpRange(Number(minHp), Number(maxHp));
    setCars(cars);
  };

  const updateCar = async (car: Car) => {
    await repository.updateCar({ ...car, brand: "VW Updated", model: "Fusca Updated", hp: car.hp + 10 });
    await all();
  };

  return (
    <View>
      <Button onPress={create} title="Create" />
      <Button onPress={all} title="All" />

      <TextInput placeholder="Model" value={model} onChangeText={setModel} />
      <Button onPress={searchByModel} title="Search by Model" />

      <TextInput placeholder="Min HP" value={minHp} onChangeText={setMinHp} keyboardType="numeric" />
      <TextInput placeholder="Max HP" value={maxHp} onChangeText={setMaxHp} keyboardType="numeric" />
      <Button onPress={searchByHpRange} title="Search by HP Range" />

      {cars.map((car) => (
        <View key={car.id}>
          <Text>{car.id} - {car.brand} {car.model} {car.hp}</Text>
          <Button onPress={() => deleteCar(car.id)} title="Delete" />
          <Button onPress={() => updateCar(car)} title="Update" />
        </View>
      ))}
    </View>
  );
}
