function CompanyItem({ name }: { name: string; highlight: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm font-semibold border-b-2 ${"text-[#f8f8f2]"}`}>
        {name}
      </span>
    </div>
  );
}

export default CompanyItem;
