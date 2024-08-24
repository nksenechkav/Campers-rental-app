// src/components/customScrollbar/CustomScrollbar.jsx

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const CustomScrollbar = ({ children }) => (
    <PerfectScrollbar
      style={{ height: '100%'}} // або інші стилі, які можуть бути необхідні
      options={{
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20,
      }}
    >
      {children}
    </PerfectScrollbar>
);

export default CustomScrollbar;
