import { motion } from "framer-motion";
import { Music, Film, BookOpen, PenTool } from "lucide-react";

export default function Home() {
  const links = [
    { name: "Spotify", icon: Music, href: "https://open.spotify.com/user/31hirymx3nid6xx6267gsr6zjbma?si=7nHPXT-tTImAa8DpmWp3pQ&fbclid=PAZXh0bgNhZW0CMTEAAael4q91wXwq3pecr5l7-Q-ULzUyHqHwE42ceV6XOJQp4bnvLUZB5T6sB2jpZQ_aem_zeoRMmUfQ0J9JNzqEpsEEA&nd=1&dlsi=ca5ae507810e487c" },
    { name: "Bangumi", icon: BookOpen, href: "https://bangumi.tv/user/661413?fbclid=PAZXh0bgNhZW0CMTEAAafMyLpHt9zvVpOTANH7uyxDKfXoscxaHK-RpWY-D989WSqUyW-JPOyawOmbQg_aem_WNRxzHy-em6lEi1rWFtIjg" },
    { name: "Letterboxd", icon: Film, href: "https://letterboxd.com/weiqueren/?fbclid=PAZXh0bgNhZW0CMTEAAadyiMoiV9577Ii_IfTqQ8wlqKLSiWCoCZLUCznqqX2tq-qTcl38RPIAV5GgLw_aem_67tMyd-VfY_Q6hM37LA3TQ" },
    { name: "Medium", icon: PenTool, href: "https://medium.com/@mx90343" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        Hew Min Xuan
      </motion.h1>

      <div className="w-full max-w-xs space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition"
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.name}
          </motion.a>
        ))}
      </div>
    </main>
  );
}
