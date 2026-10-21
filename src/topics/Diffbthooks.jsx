
import React from 'react';

function Diffbthooks() {
  const hooks = [
    ['useState', 'Stores and updates state (data).'],
    ['useEffect', 'Performs side effects, such as fetching API data.'],
    ['useContext', 'Accesses shared data without passing props through every component.'],
    ['useRef', 'Accesses DOM elements or stores values without causing a re-render.'],
    ['useReducer', 'Manages state using actions and a reducer function.'],
    ['useLayoutEffect', 'Measures or adjusts layout before the browser displays changes.'],
    ['useCallback', 'Remembers a function between renders.'],
    ['useMemo', 'Remembers the result of a calculation between renders.'],
    ['Custom Hooks', 'Reuse logic between components.'],
  ];

  return (
    

      <div className="overflow-x-auto text-white rounded-lg">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="border border-gray-600 p-3">Hook</th>
              <th className="border border-gray-600 p-3">Main Purpose</th>
            </tr>
          </thead>

          <tbody>
            {hooks.map(([hook, purpose]) => (
              <tr key={hook} className="bg-gray-800">
                <td className="border border-gray-600 p-3 font-semibold text-blue-300">
                  {hook}
                </td>
                <td className="border border-gray-600 p-3">
                  {purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
}

export default Diffbthooks;
