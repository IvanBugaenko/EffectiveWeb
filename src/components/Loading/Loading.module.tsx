import { MutatingDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#ed1a3b"
      secondaryColor="#ed1a3b"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
