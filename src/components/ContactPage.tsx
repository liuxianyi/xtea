import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const address = "河南省信阳市商城县伏山乡杨桥村居民委员会入口处";
  const phone = "17709886453";
  const name = "刘守富";
  
  // 高德地图坐标（需要根据实际地址获取准确坐标）
  const latitude = "31.799178";
  const longitude = "115.409396";

  const openMap = (mapType: 'gaode' | 'apple' | 'google') => {
    const encodedAddress = encodeURIComponent(address);
    let url = '';
    
    switch (mapType) {
      case 'gaode':
        url = `https://uri.amap.com/marker?position=${longitude},${latitude}&name=${encodedAddress}`;
        break;
      case 'apple':
        url = `maps://maps.apple.com/?q=${encodedAddress}&ll=${latitude},${longitude}`;
        break;
      case 'google':
        url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        break;
    }
    
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">联系方式</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* 联系人 */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-green-800" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <a
                href={`tel:${phone}`}
                className="text-green-800 hover:text-green-600 font-medium"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* 地址 */}
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-green-800" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">地址</h3>
              <p className="text-gray-600 mb-4">{address}</p>
              
              {/* 简略地图预览 */}
              <div className="relative mb-4 cursor-pointer group"
                   onClick={() => document.getElementById('mapModal')?.showModal()}>
                <img 
                  src={`https://restapi.amap.com/v3/staticmap?location=${longitude},${latitude}&zoom=14&size=600*300&markers=large,0xFF0000,A:${longitude},${latitude}&key=4326d249b262bb76039d996936f0a7d3`}
                  alt="位置预览"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 h-8 w-8" />
                </div>
              </div>

              {/* 地图选择对话框 */}
              <dialog id="mapModal" className="modal p-4 rounded-lg shadow-xl backdrop:bg-black backdrop:bg-opacity-50">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">选择地图应用</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => openMap('gaode')}
                      className="w-full bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      在高德地图中打开
                    </button>
                    <button
                      onClick={() => openMap('apple')}
                      className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                    >
                      在苹果地图中打开
                    </button>
                    <button
                      onClick={() => openMap('google')}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                    >
                      在谷歌地图中打开
                    </button>
                  </div>
                  <button
                    onClick={() => document.getElementById('mapModal')?.close()}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    关闭
                  </button>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}