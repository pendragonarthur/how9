import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import Image from "next/image"

import { UsersRound } from 'lucide-react';

type Praia = {
    id: number,
    nome: string,
    status: string,
    imageSrc: string,
    descricao: string
    cidade: string,
    avaliacoes: number
}

export default function PraiaCard({ praia }: { praia: Praia }) {
    return (
        <div className="w-full" key={praia.id}>
            <Card className="relative grid grid-cols-3">
                <div className="relative">
                    <Image src={praia.imageSrc} sizes="32" fill alt={praia.nome} />
                </div>
                <CardHeader className="space-y-4 w-lg py-8">
                    <div>
                        <CardTitle>{praia.nome}</CardTitle>
                        <CardDescription>{praia.cidade}</CardDescription>
                    </div>
                    <Badge className={`${praia.status === 'Própria' ? "border-1 border-green-600 rounded-full bg-transparent text-green-600" : "text-red-600 border-1 border-red-600 rounded-full bg-transparent"} text-md absolute top-6 right-6`}>{praia.status}</Badge>
                    <CardDescription className="text-wrap max-w-sm">{praia.descricao}</CardDescription>
                    <CardDescription className="flex items-center gap-2">
                        <UsersRound width={16} color="gray" />
                        <p>{praia.avaliacoes} avaliações</p>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}