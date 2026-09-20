import Intro from "./Intro";
import Experience from "./Experience";
import Education from "./Education";

// Tab "Story" menggabungkan perkenalan, pengalaman, dan pendidikan
// jadi satu alur cerita tentang perjalanan profesionalnya.
export default function Story() {
  return (
    <div>
      <Intro />
      <Experience />
      <Education />
    </div>
  );
}
