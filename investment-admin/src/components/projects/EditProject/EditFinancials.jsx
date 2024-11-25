const EditFinancials = ({
  project,
  perShareValueDisplay,
  projectValue,
  totalShared,
  handleAssetValue,
  displayAssetValue,
  handleNotaryFeeValue,
  displayNotaryFee,
  handleSharikanaFee,
  displaySharikanaFee,
  handlePerSharedValue,
  handleNextClick,
  handleInputChange,
  formData,
}) => {
  return (
    <div className="p-4 shadow-12">
      <div className="space-y-8">
        {/* Asset Value Section */}
        <div>
          <h4 className="mb-8 text-xl font-bold">Asset Value</h4>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Asset Value */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Project Asset Value :
              </label>
              <input
                type="text"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Total Project Value"
                name="projectAssetValue"
                value={displayAssetValue}
                onChange={handleAssetValue}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
              />
            </div>

            {/* Notary Fee */}
            <div className="relative mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Notary fee (%) :
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Notary fee %"
                name="notaryFee"
                value={displayNotaryFee}
                onChange={handleNotaryFeeValue}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
              {displayNotaryFee?.length > 0 && (
                <p
                  className="text-gray-500 absolute right-2 top-13 -translate-y-1/2 transform"
                  style={{
                    left: `${displayNotaryFee.length * 10 + 25}px`,
                  }}
                >
                  %
                </p>
              )}
            </div>

            {/* Sharikana Fee */}
            <div className="relative mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Sharikana fee (%) :
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Sharikana Fee %"
                name="sharikanaFee"
                value={displaySharikanaFee}
                onChange={handleSharikanaFee}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
              {displaySharikanaFee?.length > 0 && (
                <p
                  className="text-gray-500 absolute right-2 top-13 -translate-y-1/2 transform"
                  style={{
                    left: `${displaySharikanaFee.length * 10 + 25}px`,
                  }}
                >
                  %
                </p>
              )}
            </div>

            {/* Total Project Value */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Total Project Value :
              </label>
              <p
                className="border-gray-300 bg-gray-100 text-gray-700 w-full rounded-md border ps-2"
                style={{
                  height: "50px",
                  lineHeight: "50px",
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
              >
                {projectValue?.toLocaleString()}
              </p>
            </div>

            {/* Per Share Value */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Per Share Value :
              </label>
              <input
                type="text"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Per Share Value"
                name="perShareValue"
                value={perShareValueDisplay}
                onChange={handlePerSharedValue}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
              />
            </div>

            {/* Minimum Share */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Minimum Share :
              </label>
              <input
                type="text"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Minimum Investment Share Value"
                name="minimumShareValue"
                value={formData.minimumShareValue}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
              />
            </div>
            {/* Maximum Share */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Maximum Share :
              </label>
              <input
                type="text"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Minimum Investment Share Value"
                name="maximumShareValue"
                value={formData.maximumShareValue}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
              />
            </div>

            {/* Total Shared Count */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Total Shared Count:
              </label>
              <p
                className="border-gray-300 bg-gray-100 text-gray-700 w-full rounded-md border ps-2"
                style={{
                  height: "50px",
                  lineHeight: "50px",
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
              >
                {Number.isFinite(totalShared)
                  ? totalShared?.toLocaleString()
                  : 0}
              </p>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Investment For (Year):
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Investment For (Year)"
                name="investmentDurationYear"
                value={formData.investmentDurationYear}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>
          </div>
        </div>

        {/* Return Section */}
        <div>
          <h4 className="mb-8 text-xl font-bold">Return</h4>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Annual Return Value */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Annual Return Value:
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Annual return Value"
                name="yearlyReturnValue"
                value={formData.yearlyReturnValue}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>

            {/* Half Yearly Return Value */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Half Yearly Return Value:
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Half Yearly Return Value"
                name="halfYearlyReturnValue"
                value={formData.halfYearlyReturnValue}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>

            {/* Monthly Return Value */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Monthly Return Value:
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Monthly Return Value"
                name="monthlyReturnValue"
                value={formData.monthlyReturnValue}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>

            {/* Project Annual Capital Appreciation */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Project annual capital appreciation:
              </label>
              <input
                type="number"
                className="border-gray-300 w-full rounded-md border p-2"
                placeholder="Project annual capital appreciation"
                name="projectAnnualCapitalAppreciation"
                value={formData.projectAnnualCapitalAppreciation}
                onChange={handleInputChange}
                style={{
                  borderColor: "#dddddd",
                  outlineColor: "#00c196",
                  outlineWidth: "2px",
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end" onClick={handleNextClick}>
        <p
          style={{
            backgroundColor: "#006666",
            color: "white",
            padding: "10px 20px",
            marginRight: "30px",
            borderRadius: "5px",
            zIndex: 10,
            cursor: "pointer",
          }}
        >
          Next
        </p>
      </div>
    </div>
  );
};

export default EditFinancials;
