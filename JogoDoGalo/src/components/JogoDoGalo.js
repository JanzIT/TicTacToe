import React, { useEffect } from 'react';
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";

const casaVazia = " ";

export function JogoDoGalo() {
    const {
        jogo,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor,
        reiniciarJogo
    } = useJogoDoGalo();

    // Cada jogada
    const Jogada = (linha, coluna) => {
        if (jogo.tabuleiro[linha][coluna] === casaVazia) {
            adicionarJogada(jogo, jogo.jogadorAtual, linha, coluna);
        }
    };
    return (
        <div className=" bg-zinc-600 h-screen">
            {jogo.tabuleiro.map((linha, linhaIndex) => (
                <div className="flex justify-center">
                    {linha.map((elemento, colunaIndex) => (
                        <button
                            disabled={jogo.tabuleiro[linhaIndex][colunaIndex] !== casaVazia || verificarFimDoJogo(jogo)}
                            key={colunaIndex}
                            className=" text-white rounded-lg size-20 m-2 bg-transparent border-2 border-y-pink-500 gap-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                            onClick={() => Jogada(linhaIndex, colunaIndex)}
                        >
                            {elemento}
                        </button>
                    ))}
                </div>
            ))}
            <div className="flex justify-center pt-7">
                <button className=" text-white rounded-lg w-40 h-10 m-2 bg-transparent border-2 border-y-pink-500 gap-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={reiniciarJogo}>
                    Restart
                </button>
            </div>
            <div className='flex justify-center text-white'>
                {verificarFimDoJogo(jogo)
                    ? verificarVencedor(jogo)
                        ? < p className="flex justify-center rounded-lg w-20 h-10 m-2 bg-y-pink-500 border-2 border-y-pink-500 gap-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"> {verificarVencedor(jogo)} Won </p>
                        : < p className="flex justify-center rounded-lg w-20 h-10 m-2 bg-y-pink-500 border-2 border-y-pink-500 gap-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Empate!</p>
                    : <p className='flex flex-row justify-center rounded-lg w-20 h-10 m-2 bg-transparent border-2 border-y-pink-500 gap-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>{jogo.jogadorAtual}´s turn</p>}
            </div>
        </div>
    );
}