export function BulletPoints3(text1, text2, text3) {
  return (
    <div className="triple-bullet-points">
      <ul>
        <li>
          <p className="text-primary-400">{text1}</p>
        </li>
        <li>
          <p className="text-primary-400">{text2}</p>
        </li>
        <li>
          <p className="text-primary-400">{text3}</p>
        </li>
      </ul>
    </div>
  );
}
