import Header from "@components/Header/Header"


const DeliveryOrderPage = () => {
	const handleClick = () => {
		console.log('누르면 모달창이 나올겁니다.')
	}
	return (
    <div>
      <Header onClick={handleClick} />
    </div>
  );
}

export default DeliveryOrderPage