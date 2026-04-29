import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Dropdown() {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline">Ordenar</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>Melhores avaliações</DropdownMenuItem>
            <DropdownMenuItem>Piores avaliações</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}