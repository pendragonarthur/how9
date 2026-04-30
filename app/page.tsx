"use client"

import { CalendarDays, Search } from 'lucide-react';

import { Nunito } from 'next/font/google';
import type { AppProps } from 'next/app';
import Image from 'next/image';

import logo from '@/public/logo.png'

import { motion } from 'motion/react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Dropdown from '@/app/components/Dropdown'
import PraiaCard from './components/PraiaCard';

import { useState } from 'react';
import { cn } from '@/lib/utils';

import praias from '@/app/data/praias.json'
import { useWeather } from './hooks/useWeather';


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

function getData() {
  const now = new Date()
  now.setHours(now.getHours() - 1)

  const nowUpdate = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })

  return nowUpdate
}

export default function Home({ Component, pageProps }: AppProps) {

  const [statusFilter, setStatusFilter] = useState<"Todas" | "Própria" | "Imprópria">("Todas")
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null)

  const filtered = praias
    .filter((p) => {
      const matchSearch = p.nome.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === "Todas" || p.status === statusFilter
      return matchSearch && matchStatus
    }).sort((a, b) => {
      if (sortOrder === "asc") return a.avaliacoes - b.avaliacoes
      if (sortOrder === "desc") return b.avaliacoes - a.avaliacoes
      return 0
    })

  const weather = useWeather()

  return (
    <main className={cn(nunito.className, "h-screen")}>

      {/* HEADER */}
      <div className="flex justify-between px-8 py-4 items-center">
        <div className='flex gap-1 items-center'>
          <Image src={logo.src} width="64" height="64" alt="logo" />
          <div>
            <h1 className="text-xl font-semibold text-[#041d2c]">Monitor de Praias</h1>
            <p className="text-sm font-medium text-[#1d3441]">Balneário Camboriú e Região</p>
          </div>
        </div>
        <div>
          {weather ? (
            <h1 className='text-lg font-medium'>{weather.icon} {weather.temp}°C</h1>
          ) : (
            <span className='text-sm text-gray-400'>carregando...</span>
          )}
        </div>
      </div>

      {/* HERO SECTION */}
      <div>
        <div className="relative bg-cover bg-center pt-40 px-20" style={{ backgroundImage: "url('/bc.jpg')", height: '70vh' }}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent backdrop-blur-xs"
          />
          <div className="relative z-10 px-8 py-4 max-w-lg space-y-4">
            <h1 className='text-5xl font-semibold text-[#041d2c]'>Qual a condição da sua praia hoje?</h1>
            <p className='text-lg text-[#1d3441]'>Informações atualizadas sobre a balneabilidade das principais praias de Balneário Camboriú e região</p>
            <div className='bg-white px-4 py-4 flex gap-2 items-center rounded-xl max-w-xs'>
              <CalendarDays color='#1d3441' />
              <div>
                <p className='text-xs text-[#1d3441] font-semibold'>Última atualização</p>
                <p>{getData()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH/FILTRO */}
      <div className='container mx-auto py-16'>
        <div className='flex items-center justify-evenly'>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />

            <Input
              placeholder="Buscar praia..."
              className="pl-10"
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='flex gap-4'>
            <Button onClick={() => setStatusFilter("Todas")} className='rounded-full px-8 py-6 cursor-pointer text-gray-500 border-1 border-gray bg-transparent transition-colors duration-300'>Todas</Button>
            <Button onClick={() => setStatusFilter("Própria")} className='rounded-full px-8 py-6 cursor-pointer text-gray-500 bg-transparent border-1 border-gray transition-colors duration-300'>Próprias</Button>
            <Button onClick={() => setStatusFilter("Imprópria")} className='rounded-full px-8 py-6 cursor-pointer text-gray-500 bg-transparent border-1 border-gray transition-colors duration-300'>Impróprias</Button>
          </div>
          <Dropdown onSortChange={setSortOrder} />
        </div>
      </div>

      {/* CARDS */}
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 container mx-auto'>
        {filtered.map((p) => (
          <PraiaCard key={p.id} praia={p} />
        ))}
      </div>
    </main>
  );
}
