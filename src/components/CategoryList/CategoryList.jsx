
export default function CategoryList({ categories, activeCat, setActiveCat }) {
  
  const cats = categories.map(cat =>
    <option key={cat} value={cat} selected={cat === activeCat ? 'selected' : ''}>
      {cat}
    </option>
  );

  const handleChange = (e) => {
   setActiveCat(e.target.value);
  };

  return (
<select className="form-control mt-2" style={{ filter: "brightness(90%)",width:"500px"}}  onChange={handleChange}>
<option key="all" value="All">All</option>
      {cats}
 </select>
  );

}
