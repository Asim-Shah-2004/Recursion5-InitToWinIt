import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({text,type}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{text}</Label>
      <Input type={type} id="email" placeholder={type} />
    </div>
  )
}
