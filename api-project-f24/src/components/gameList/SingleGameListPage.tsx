// "use client";
// import { UseGameListStore } from "@/store/gameListState";
// import GameListItem from "@/ui/GameListItem";
// import GameListSummary from "@/components/gameList/GameListSummary";
// import { useEffect, useState } from "react";
// import { slugify } from "@/utility/slugify";

// interface Props {
//   listId: string;
// }

// const SingleGameListPage = ({ listId }: Props) => {
//   const { games, fetchGames } = UseGameListStore();
//   const [isLoading, setIsLoading] = useState(true);
//   // const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await fetchGames();
//       } catch (error) {
//         console.error("Failed to fetch games:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [fetchGames]);

//   const filteredGames = games.filter(
//     (game) => slugify(game.listName) === listId,
//   );
//   const listName = filteredGames[0]?.listName || listId;
//   // const handleCopy = () => {
//   //   navigator.clipboard.writeText(window.location.href);
//   //   setCopied(true);
//   //   setTimeout(() => setCopied(false), 2000);
//   // };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-white mt-4">Loading list...</p>
//         </div>
//       </div>
//     );
//   }

//   if (filteredGames.length === 0) {
//     return (
//       <div className="text-white text-center mt-20">
//         No games found in list <strong>{listId}</strong>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 space-y-12 max-w-7xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-4">
//         <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-slate-100">
//           {listName}
//         </h1>
//         {/* <button
//           onClick={handleCopy}
//           className="bg-slate-800 text-white px-3 py-1 rounded hover:bg-slate-700 text-sm"
//         >
//           {copied ? "Link shared" : "Share link"}
//         </button> */}
//       </div>

//       <GameListSummary games={filteredGames} />
//       <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {filteredGames.map((game) => (
//           <GameListItem key={game.id} game={game} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SingleGameListPage;
