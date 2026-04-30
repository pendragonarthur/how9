import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DropdownProps {
    onSortChange: (order: "asc" | "desc") => void
}

export default function Dropdown({ onSortChange }: DropdownProps) {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-gray-500">Ordenar</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onSortChange("desc")}>Mais avaliadas</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange("asc")}>Menos avaliadas</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}