import { Button } from 'shared/ui/Button/Button'
import { Calendar } from 'shared/ui/Calendar'

export default function Page() {
  return (
    <section className='flex flex-col gap-y-4'>
      <h1>Web</h1>
      <Button variant='destructive' className='w-fit'>Click me</Button>
      <Button variant='default' className='w-fit'>Click me </Button>
      <Calendar />
    </section>
  );
}
