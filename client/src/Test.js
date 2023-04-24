// import { useState, useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

// function MovingIcon() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [showCard, setShowCard] = useState(false);
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setPosition((prevPosition) => ({
//         x: prevPosition.x + direction * 5,
//         y: prevPosition.y,
//       }));
//       setDirection((prevDirection) => -prevDirection);
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleMouseEnter = () => {
//     setShowCard(true);
//   };

//   const handleMouseLeave = () => {
//     setShowCard(false);
//   };

//   return (
//     <div style={{ position: 'relative', height: '100vh' }}>
//       <Avatar
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         sx={{
//           position: 'absolute',
//           top: position.y,
//           left: position.x,
//           backgroundColor: 'primary.main',
//           '&:hover': {
//             cursor: 'pointer',
//             animation: 'none',
//           },
//           animation: 'moving-icon 2s infinite',
//           '@keyframes moving-icon': {
//             '0%': {
//               transform: 'translateY(0)',
//             },
//             '50%': {
//               transform: 'translateY(-10px)',
//             },
//             '100%': {
//               transform: 'translateY(0)',
//             },
//           },
//         }}
//       >
//         <Button />
//       </Avatar>
//       {showCard && (
//         <Card
//           sx={{
//             position: 'absolute',
//             top: position.y + 80,
//             left: position.x,
//             maxWidth: 345,
//             zIndex: 999,
//           }}
//         >
//           <CardContent>
//             <p>Here is the content of the card</p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }

// export default MovingIcon;

