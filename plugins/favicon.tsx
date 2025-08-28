import type { ZudokuPlugin } from "zudoku";

const FaviconPlugin: ZudokuPlugin = {
  getHead: () => {
    return (
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/ikft-32x32.png"
      />
    );
  },
};

export default FaviconPlugin;
