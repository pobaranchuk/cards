import CheckboxDemo from '@/components/ui/checkbox/checkbox'
import { Input } from "@/components/ui/input/input";

export function App() {
  return (
    <div style={{ alignItems: 'center', display: 'flex', margin: '40px' }}>
      <CheckboxDemo />
      <Input value={'1111'}/>
    </div>
  )
}
