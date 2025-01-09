import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";

export default function CaseStudy() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full inline-block text-center justify-center">
        <h1 className={title({ size: "lg" })}>
          Strategic Cloud Migration: Escaping Vendor Lock-in and Reducing Costs
        </h1>
      </div>

      <div className="w-full mt-8">
        <h2 className={title({ size: "sm" })}>Background</h2>
        <p className={subtitle()}>
          A mid-sized enterprise faced an urgent challenge when their VMware
          renewal costs dramatically increased (~300%) following the Broadcom
          acquisition. This case study details how we successfully migrated
          their infrastructure from VMware on AWS to native Azure services,
          avoiding significant cost increases while modernizing their
          infrastructure.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4">
          <h2 className={title({ size: "sm" })}>Client Overview</h2>
          <ul className={`${subtitle()} list-disc list-inside`}>
            <li>Industry: Manufacturing/Retail</li>
            <li>Size: 201-500 employees</li>
            <li>Environment: VMware NSX on AWS</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={title({ size: "sm" })}>Challenges</h2>
          <ul className={`${subtitle()} list-disc list-inside`}>
            <li>Unexpected VMware cost increase</li>
            <li>Complex existing infrastructure</li>
            <li>Tight migration deadline</li>
            <li>Business continuity requirements</li>
            <li>Legacy application constraints</li>
          </ul>
        </div>
      </div>

      <div className="w-full mt-8">
        <h2 className={title({ size: "md" })}>Solution Approach</h2>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className={title({ size: "sm" })}>Assessment Phase</h3>
            <ul className={`${subtitle()} list-disc list-inside`}>
              <li>Documented infrastructure and dependencies</li>
              <li>Identified critical applications</li>
              <li>Created VM and network inventory</li>
              <li>Analyzed risks and mitigation strategies</li>
            </ul>
          </div>
          <Divider className="my-4" />
          <div>
            <h3 className={title({ size: "sm" })}>Planning Phase</h3>
            <ul className={`${subtitle()} list-disc list-inside`}>
              <li>Designed target Azure architecture</li>
              <li>Created migration sequence</li>
              <li>Developed rollback procedures</li>
              <li>Established success criteria</li>
            </ul>
          </div>
          <Divider className="my-4" />
          <div>
            <h3 className={title({ size: "sm" })}>Execution Phase</h3>
            <ul className={`${subtitle()} list-disc list-inside`}>
              <li>Executed planned migration sequence</li>
              <li>Performed continuous testing</li>
              <li>Maintained parallel environments</li>
              <li>Validated all services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4">
          <h2 className={title({ size: "sm" })}>Business Impact</h2>
          <ul className={`${subtitle()} list-disc list-inside`}>
            <li>Avoided VMware cost increase</li>
            <li>Reduced infrastructure complexity</li>
            <li>Improved scalability</li>
            <li>Enhanced disaster recovery</li>
            <li>Simplified operations</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={title({ size: "sm" })}>Technical Benefits</h2>
          <ul className={`${subtitle()} list-disc list-inside`}>
            <li>Modern cloud architecture</li>
            <li>Improved performance</li>
            <li>Enhanced security</li>
            <li>Better monitoring</li>
            <li>Reduced technical debt</li>
          </ul>
        </div>
      </div>

      <div className="w-full mt-8">
        <h2 className={title({ size: "sm" })}>Conclusion</h2>
        <p className={subtitle()}>
          This migration project demonstrated the value of strategic thinking in
          IT infrastructure decisions. By proactively addressing the VMware cost
          increase through migration to Azure, we helped the client avoid
          significant expenses while modernizing their infrastructure for future
          growth.
        </p>
      </div>
    </section>
  );
}
