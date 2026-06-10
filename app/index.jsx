import { Redirect } from "expo-router";

export default function InitialRoute() {
  // Esse arquivo serve apenas como uma ponte invisível.
  // Ele diz ao APK para redirecionar imediatamente para a tela de introdução.
  return <Redirect href="/introducao" />;
}