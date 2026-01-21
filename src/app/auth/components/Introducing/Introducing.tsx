import { AbilityCard } from '@/src/app/auth/components/AbilityCard/AbilityCard';
import { ABILITY_CARDS } from '@/src/app/auth/components/Introducing/constants/ability-cards';

export const Introducing = () => {
  return (
    <section className="flex flex-col justify-center items-center md:min-h-screen">
      <h1 className="text-24 md:text-36 font-bold text-white">LinkUp Chat</h1>
      <p>
        Experience seamless messaging with real-time chat, <br />
        voice calls, and group collaboration.
      </p>
      <section className="grid gap-1 grid-cols-2">
        {ABILITY_CARDS.map((el) => (
          <AbilityCard key={el.id} {...el} />
        ))}
      </section>
    </section>
  );
};
