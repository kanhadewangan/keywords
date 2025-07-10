const x = useMotionValue(0);
const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"]);
const backgroundColor = useTransform(
  x,
  [-100, 0, 100],
  ["#6d4b7e", "#306a87", "#695a37"]
);
const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);

return (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div
      style={{ x, borderRadius, backgroundColor, scale }}
      className="w-32 h-32 rounded-md flex items-center justify-center text-white"
      drag="x"
      dragConstraints={{ left: 0, right: 0}}
    />
  </div>
)