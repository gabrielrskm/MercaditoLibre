export default function ThemeScript() {
  return (
    <script>
      {`
        (function() {
          try {
            const theme = localStorage.getItem("theme");
            if (theme === "dark") {
              document.documentElement.setAttribute("data-theme", "dark");
            } else{
              document.documentElement.setAttribute("data-theme", "light");
            }
          } catch (_) {}
        })();
      `}
    </script>
  );
}