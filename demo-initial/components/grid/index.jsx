import clsx from 'clsx';

function Grid(props) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row gap-4', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props) {
  return (
    <li {...props} className={clsx('aspect-square transition-opacity', props.className)}>
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
