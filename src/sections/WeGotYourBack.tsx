// src/sections/WeGotYourBack.tsx
export default function WeGotYourBack() {
  return (
    <div className="mx-auto max-w-7xl px-4 space-y-8">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold">We got your back</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { t: "Become a member", d: "receive amazing surprises monthly" },
          { t: "Find your match", d: "virtual shade match" },
          { t: "Color that fit you", d: "know all the colors that go with you" },
          { t: "Chat with pros", d: "get the best tips for your makeup" },
        ].map((x, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-5">
            <div className="aspect-video bg-black/30 rounded-xl mb-4" />
            <h3 className="font-semibold">{x.t}</h3>
            <p className="text-sm text-white/70">{x.d}</p>
            <a className="text-primary text-sm mt-2 inline-block" href="#">click here</a>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center border-t border-white/10 pt-8">
        <img src="/logofinal.png" className="w-full max-w-sm opacity-90" alt="Adharas Beauty" />
        <div className="text-sm text-white/80">
          <h4 className="font-bold text-white mb-2">CUSTOMER SERVICE</h4>
          <p>Mon–Fri 9am–9pm EST · Sat 9am–6pm EST</p>
          <p className="mt-2">
            <a className="underline" href="mailto:customerservice@adharastbeauty.com">
              customerservice@adharastbeauty.com
            </a>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a className="underline" href="#">Shipping info</a>
            <a className="underline" href="#">Returns</a>
            <a className="underline" href="#">Paying methods</a>
            <a className="underline" href="#">Gift cards</a>
          </div>
        </div>
      </div>
    </div>
  );
}
