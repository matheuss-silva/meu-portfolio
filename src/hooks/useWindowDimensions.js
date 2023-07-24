import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  // Verifica se o objeto 'window' está definido, para evitar problemas ao renderizar no servidor
  const hasWindow = typeof window !== "undefined";

  // Função para obter as dimensões da janela
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  // Estado para armazenar as dimensões da janela
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // Efeito para adicionar um listener ao evento de redimensionamento da janela
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        // Atualiza as dimensões da janela quando ocorrer o evento de redimensionamento
        setWindowDimensions(getWindowDimensions());
      }

      // Adiciona o listener ao evento de redimensionamento
      window.addEventListener("resize", handleResize);

      // Remove o listener quando o componente é desmontado para evitar vazamento de memória
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  // Retorna as dimensões da janela para serem utilizadas no componente
  return windowDimensions;
}
